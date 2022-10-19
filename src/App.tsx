import "./App.scss";
import React, { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showDetails } from "./data.action";
import { AnyAction } from "redux";
import { InitialState, People } from "./data.reducer";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state: InitialState) => state.data);
  // async function showDetails() {
  //   const data = await getDummyData();
  //   console.log(data);
  // }
  useEffect(() => {
    dispatch(showDetails() as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">DEMO PROJECT</header>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>DOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((datum: People) => (
              <TableRow>
                <TableCell>{datum.name}</TableCell>
                <TableCell>{datum.age}</TableCell>
                <TableCell>{datum.dob}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
