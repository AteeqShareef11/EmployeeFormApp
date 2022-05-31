import React, { useState } from 'react'
import Table from '@mui/material/Table';
import { TableCell, tableCellClasses, TableHead, TablePagination, TableRow, TableSortLabel } from '@mui/material';
import { styled } from '@mui/material/styles';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const UseTable = (records,headCells,filterFn) => {

    const pages =[5,10,15]
    const [page,setPage] = useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(pages[page]) 
    const [order,setOrder] = useState()
    const [orderBy,setOrderBy] = useState()


   
  const TblContainer  = props =>(
    
    <Table>
    {props.children}
    </Table>
  )
   
  const handleSortRequest = cellId =>{
    const isAsc = orderBy === cellId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(cellId)
  }

  const TblHead = props =>{
    return(
      <TableHead>
        <TableRow>
          {
            headCells.map(headCell=>(
            
              <StyledTableCell  key= {headCell.id}
               direction={orderBy === headCell.id ? order:"false"}>

              <TableSortLabel 
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={ ()=> {handleSortRequest(headCell.id)}}
              >
              {headCell.label}
              </TableSortLabel>
              
              </StyledTableCell>
            ))
          }
        </TableRow>
      </TableHead>
    )
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

   const TblPagination =()=>(
     <TablePagination
         
          component="div"
          count={records.length}
          rowsPerPage={rowsPerPage}
          page={page}
          rowsPerPageOptions={pages}
          
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}

        
     />
   )

   function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }


   const recordsAfterPagintionAndSorting=()=>{
     return  stableSort(filterFn.fn(records),getComparator(order,orderBy)).slice(page*rowsPerPage,(page+1)*rowsPerPage)
  
   }

  return{
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagintionAndSorting
  }
}

export default UseTable