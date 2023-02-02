import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { IRegister } from "../../interfaces/interface";
import { useAppDispatch } from "../../redux/hook/hook";
import { userRegister } from "../../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { positionGetAll } from "../../redux/action/positionAction";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const LabelIput = styled.div`
  font-size: 16px;
  color: #000;
  display: flex;
  height: 100%;
  align-items: center;
`;
const BoxForm = styled.div`
  padding: 20px 20px;
  position: fixed;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
`;
const AddUser = () => {
  const postions = useSelector((state: RootState) => state.position.positions);
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleOpen = async () => {
    setOpen(true);
    dispatch(positionGetAll());
    console.log(postions);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({});
  const navigate = useNavigate();
  const handleRegister = (data: IRegister) => {
    dispatch(
      userRegister({
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        password: data.password,
        email: data.email,
        avartar: "sdsd",
        isactive: data.isactive,
        positionId: data.positionId,
      })
    );
  };
  return (
    <div>
      <Button
        type="button"
        variant="contained"
        onClick={handleOpen}
        sx={{
          textTransform: "capitalize",
          margin: "0 5px",
        }}
      >
        Add User
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxForm>
          <h2>Register Member</h2>
          <form
            action=""
            autoComplete="off"
            onSubmit={handleSubmit(handleRegister)}
          >
            <Controller
              name="username"
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="Username"
                    variant="standard"
                    style={{ width: "100%", marginBottom: "15px" }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    required
                  />
                );
              }}
              control={control}
              defaultValue=""
            />
            <Controller
              name="firstname"
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="First Name"
                    variant="standard"
                    style={{ width: "100%", marginBottom: "15px" }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    required
                  />
                );
              }}
              control={control}
              defaultValue=""
            />
            <Controller
              name="lastname"
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="Last Name"
                    variant="standard"
                    style={{ width: "100%", marginBottom: "15px" }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    required
                  />
                );
              }}
              control={control}
              defaultValue=""
            />
            <Controller
              name="email"
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    label="Email"
                    variant="standard"
                    style={{ width: "100%", marginBottom: "15px" }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    required
                  />
                );
              }}
              control={control}
              defaultValue=""
            />
            <Controller
              name="password"
              render={({ field }) => {
                return (
                  <TextField
                    {...field}
                    type="password"
                    label="Password"
                    variant="standard"
                    style={{ width: "100%", marginBottom: "15px" }}
                    InputLabelProps={{ style: { fontSize: 14 } }}
                    required
                  />
                );
              }}
              control={control}
              defaultValue=""
            />
            <Controller
              name="positionId"
              render={({ field }) => (
                <>
                  <FormControl fullWidth>
                    <InputLabel id="select-label" sx={{ fontSize: "14px" }}>
                      Choose a position...
                    </InputLabel>
                    <Select
                      labelId="select-label"
                      label="Choose a position..."
                      {...field}
                      sx={{ height: "45px", fontSize: "13px" }}
                      MenuProps={MenuProps}
                    >
                      {postions.map((position) => {
                        return (
                          <MenuItem value={position.id} key={position.id}>
                            {position.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </>
              )}
              control={control}
              defaultValue={0}
            ></Controller>
            <Controller
              name="isactive"
              control={control}
              render={({ field: props }) => (
                <Checkbox
                  {...props}
                  checked={props.value}
                  onChange={(e) => props.onChange(e.target.checked)}
                />
              )}
            />
            <LabelIput>Active Member</LabelIput>
            <Box>
              <Button
                type="submit"
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  margin: "0 5px",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#f24b50",
                  textTransform: "capitalize",
                  margin: "0 5px",
                }}
              >
                Save
              </Button>
            </Box>
          </form>
        </BoxForm>
      </Modal>
    </div>
  );
};

export default AddUser;
