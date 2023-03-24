type IconSize = LooseAutocomplete<"sm" | "xs">;

type LooseAutocomplete<T extends string> = T | Omit<string, T>;

interface IconProps {
  size: IconSize;
}

const Icon = (props: IconProps): HTMLElement => {
  return <></>;
};

const SomeComponent = () => {
  return (
    <>
      <Icon size="xs" />
      <Icon size="Otherstuff" />
    </>
  );
};
