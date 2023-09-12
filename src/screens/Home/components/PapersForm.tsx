import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { axiosInstance } from "../../../service/axiosInstance";

interface PapelInput {
  namePaper: string;
  description: string;
}
export const PapersForm = () => {
  const { register, handleSubmit } = useForm<PapelInput>();

  const onSubmit: SubmitHandler<PapelInput> = (data) => {
    axiosInstance.post("/papeis", {
      ...data,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Nome do Papel</FormLabel>
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
