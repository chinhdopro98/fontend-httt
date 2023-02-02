import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserStore } from "../interfaces/interface";
import { userGetAll } from "../redux/action/userAction";
import { useAppDispatch } from "../redux/hook/hook";
import { RootState } from "../redux/store/store";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddUser from "../components/user/AddUser";
const Home: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.user);
  console.log(users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(userGetAll());
  }, [dispatch]);

  return (
    <div className="list-items">
      <AddUser />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">User Name</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Position</TableCell>
              <TableCell align="left">Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {user.username}
                </TableCell>
                <TableCell align="left">{user.firstname}</TableCell>
                <TableCell align="left">{user.lastname}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.position.name}</TableCell>
                <TableCell align="left">
                  {user.position.salary + "/month"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
