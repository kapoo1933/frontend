import type {ICardProps} from '~components/interfaces';

interface IContactProps {
  cards: ICardProps[];
  placeholder: string;
  search_bar_value: string | null;
  contact_id: string | null;
}

interface IHomeProps {

}

export type { IContactProps, IHomeProps };