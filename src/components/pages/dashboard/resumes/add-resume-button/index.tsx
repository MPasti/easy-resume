import { Plus } from "lucide-react";
import { ResumeCardButton } from "../resume-card";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Criar novo currículo"
      description="Comece um novo currículo"
      icon={<Plus size={50} />}
    />
  );
};
