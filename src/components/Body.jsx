
import PageNotFound from './PageNotFound'
import HomePage from './HomePage'
import DataTable from './DataTable'


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
        default :
            return(
                <PageNotFound fngotohome={gotoNavigate} />
            )
    }
  }

  




  


 


