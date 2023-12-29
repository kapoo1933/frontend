interface ICardProps {
  name: string;
  email: string;
  img_url: string;
}

interface ICardListProps {
  cards: ICardProps[];
}

interface IInputProps {
  placeholder: string;
  value: string | null;
}

interface ISearchBarProps {
  placeholder: string;
  value: string | null;
}

interface ISideBarProps {
  cards: ICardProps[];
  placeholder: string;
  search_bar_value: string | null;
}

export type { ICardProps, ICardListProps, ISideBarProps, IInputProps, ISearchBarProps }