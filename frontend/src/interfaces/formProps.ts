export interface FormProps {
  Editar: (id: string, title: string, desc: string, url: string) => void;
  onCreateVideo: (title: string, desc: string, url: string) => void;
  FecharModal: () => void;
}