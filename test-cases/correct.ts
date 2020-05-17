interface Props {
  name: string;
  lastName: string;
}

export const testFunction = (props: Props) => {
  return props.name;
};
