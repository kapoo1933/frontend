import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Contact } from "~templates";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const contact_id = params.contactId ? params.contactId : null;
  return json({ contact_id });
};

export default function RContact() {
  const { contact_id } = useLoaderData<typeof loader>() ?? {};
  return (
    <Contact cards={[{ name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'fjie', email: 'ajiel@gmail.com', img_url: '#' }, { name: 'ttttt', email: 'tetstt@gmail.com', img_url: '#' }]}
      placeholder='Search for a user'
      search_bar_value={null}
      contact_id={contact_id}
    />
  )
}