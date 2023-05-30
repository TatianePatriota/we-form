import { useEffect, useState } from "react";
import { TitleWeForm } from "../components/TitleWeForm";
import { Link } from "react-router-dom";
import { BackIcon } from "../components/Icons";
import { Button } from "../components/Button";
import {
  StyledOrganizations,
  StyledRegisteredEntities,
} from "../components/StyledRegisteredEntities";

type RegisteredEntitiesType = {
  title: string;
  description: string;
};

export function RegisteredEntities() {
  const [organizations, setOrganizations] =
    useState<RegisteredEntitiesType[]>();
  useEffect(() => {
    async function RegisteredOrganization() {
      await fetch("http://localhost:3000/RegisteredEntities")
        .then((res) => res.json())
        .then((data) => setOrganizations(data))
        .catch((e) => console.log(e));
    }
    RegisteredOrganization();
  }, []);

  return (
    <section>
      <TitleWeForm />
      <StyledRegisteredEntities>
        <div>
          <Link to="/">
            <BackIcon />
          </Link>
          <h2>
            <span>Entidades</span>Cadastradas
          </h2>
        </div>
        {organizations?.map((item, id) => (
          <StyledOrganizations key={id}>
            <h3>{item.title}</h3>
            <Button>{item.description}</Button>
          </StyledOrganizations>
        ))}
      </StyledRegisteredEntities>
    </section>
  );
}
