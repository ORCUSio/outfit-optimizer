export type SliderProps = {
  children: React.ReactNode;
  index: number;
  setIndex: (index: number) => void;
  uris: string[];
};
