import { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  icon: LucideIcon;
  title: string;
};

export const SectionTitle = ({ icon: Icon, title }: SectionTitleProps) => {
  return (
    <div className="flex item-scenter gap-2">
      <Icon size={18} className="text-muted-foreground" />
      <h3 className="text-2xl font-ubuntuSans font-bold">{title}</h3>
    </div>
  );
};
