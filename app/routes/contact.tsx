import { useParams } from "react-router";

export default function Contact() {
  const { contactId } = useParams();
  return <div>Contact: {contactId}!</div>;
}
