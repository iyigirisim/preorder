import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Accordion from "../Accordion/Accordion";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
export const faqsData = [
	{
		id: 1,
		question: "lorem",
		answer: "lorem",
	},
	{
		id: 2,
		question: "lorem",
		answer: "lorem",
	},
	{
		id: 3,
		question: "lorem",
		answer: "lorem",
	},
];
export default function FaqWithVideoModal() {
	const [isOpen, setOpen] = useState(false);

	return (
		<section className="">
			
		</section>
	);
}
