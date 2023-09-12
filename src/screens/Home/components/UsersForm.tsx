import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { axiosInstance } from "../../../service/axiosInstance";

interface UserInput {
  namePaper: string;
  description: string;
}
export const UsersForm = () => {
  const { register, handleSubmit } = useForm<UserInput>();

  const onSubmit: SubmitHandler<UserInput> = (data) => {
    axiosInstance.post("/usuarios", {
      ...data,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Pessoa</FormLabel>
        <Input type="text" {...register("namePaper", { required: true })} />
        <FormLabel>Descrção</FormLabel>
        <Textarea
          placeholder="Escreva aqui a descrição do papel"
          {...register("description", { required: true })}
        />
        <Button mt={4} colorScheme="teal" type="submit">
          Cadastrar
        </Button>{" "}
      </FormControl>
    </form>
  );
};
