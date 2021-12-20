import { /*useEffect,*/ useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
  const{gitUsers, loading, /*fetchGitUsers */}= useContext(GithubContext)

  // useEffect(() => {
  //   fetchGitUsers()
    
  // }) 

 
  if (!loading) {
     return (
    <div className='grid grid-cols-1 gap-8 xl:grip-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {gitUsers.map((user) => (
        <UserItem key={user.id} user={ user } />
      ))}
    </div>
    )
    
  } else {
    return <Spinner/>
  }

 
}

export default UserResults
