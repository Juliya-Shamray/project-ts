import Button from "@mui/material/Button";
import { Back, StyledDiv, StyledInput } from "./Modal.styled";

interface ModalProps {
  setOpen: (arg0: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  handleSaveChanges: () => void;
}

export const Modal = ({
  setOpen,
  title,
  setTitle,
  handleSaveChanges,
}: ModalProps) => {
  const handleClose = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setOpen(false);
    }
  };
  return (
    <Back onClick={handleClose}>
      <div>
        <h2>Update task</h2>
        <StyledInput value={title} onChange={(e) => setTitle(e.target.value)} />
        <StyledDiv>
          <Button variant="outlined" onClick={handleSaveChanges}>
            Save
          </Button>
        </StyledDiv>
      </div>
    </Back>
  );
};
