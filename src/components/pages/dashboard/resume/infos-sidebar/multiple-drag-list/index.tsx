import { GripVertical, LucideIcon } from "lucide-react";
import { SectionTitle } from "../sections/section-title";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd";

export type ResumeArrayKeys = Exclude<
  keyof ResumeContentData,
  "image" | "infos" | "summary"
>;

export type MultipleDragItemData = {
  formKey: ResumeArrayKeys;
  title: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
};

type MultipleDragListProps = {
  data: MultipleDragItemData;
  onAdd: () => void;
  onEdit: (index: number) => void;
};

export const MultipleDragList = ({
  data,
  onAdd,
  onEdit,
}: MultipleDragListProps) => {
  const { control } = useFormContext<ResumeData>();

  const { fields, move } = useFieldArray({
    control,
    name: `content.${data.formKey}`,
  });

  const handleDrag = () => {
    console.log("teste");
  };

  return (
    <div>
      <SectionTitle title={data.title} icon={data.icon} />

      <div className="mt-4 flex flex-col">
        {!!fields.length && (
          <DragDropContext onDragEnd={handleDrag}>
            <Droppable droppableId={`droppable-${data.formKey}`}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="rounded overflow-hidden border border-muted"
                >
                  {fields.map((field, index) => {
                    return (
                      <Draggable
                        key={`draggable-item-${data.formKey}=${index}`}
                        draggableId={`draggable-item-${data.formKey}=${index}`}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            key={field.id}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className="h-16 w-full bg-muted/50 flex"
                          >
                            <div
                              {...provided.dragHandleProps}
                              className="w-6 h-full bg-muted/50 flex items-center justify-center hover:brrightness-125 transition-all"
                            >
                              <GripVertical size={14} />
                            </div>
                            <div className="flex-1">
                              <p>content</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
  );
};
