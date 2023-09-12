import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { axiosInstance } from "../../../service/axiosInstance";

interface PeopleForms {
  name: string;
  age: number;
  height: number;
}

export const PeopleForm = () => {
  const { register, handleSubmit } = useForm<PeopleForms>();

  const onSubmit: SubmitHandler<PeopleForms> = (data) => {
    axiosInstance.post("/pessoas", {
      ...data,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Nome</FormLabel>
        <Input type="text" {...register("name", { required: true })} />
        <FormLabel>Idade</FormLabel>
        <Input type="number" {...register("age", { required: true })} />
        <FormLabel>Altura</FormLabel>
        <Input type="number" {...register("height", { required: true })} />
        <Button mt={4} colorScheme="teal" type="submit">
          Cadastrar
        </Button>{" "}
      </FormControl>
    </form>
  );
};
