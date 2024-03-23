
import PageNotFound from './PageNotFound'
import HomePage from './HomePage'
import DataTable from './DataTable'
import Login from './Login'
import Register from './Register'


export default function Body({renderComponent, gotoNavigate}) {

    switch(renderComponent){
        case 0 :
            return(
                <HomePage />
            )
       case 1 :
            return(
                <PageNotFound fngotohome={gotoNavigate} />
            )
        case 2 :
            return(
                <DataTable />
             )
        case 3 :
            return(
                <Login />
            )
        case 4 :
            return(
                <Register />
           )
        default :
            return(
                <PageNotFound fngotohome={gotoNavigate} />
            )
    }
  }

  




  


 


