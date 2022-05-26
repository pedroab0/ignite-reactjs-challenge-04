import React from "react";

import { Modal } from "../Modal";
import { Input } from "../Input";

import { Form } from "./styles";

import { FoodBase } from "../../types/food";
import { FormHandles } from "@unform/core";

import { FiCheckSquare } from "react-icons/fi";

type Food = Omit<FoodBase, "id">;

interface ModalEditProps {
	isOpen: boolean;
	editingFood: Food;
	setIsOpen: () => void;
	handleUpdateFood: (food: FoodBase) => Promise<void>;
}

export function ModalEditFood({
	isOpen,
	setIsOpen,
	editingFood,
	handleUpdateFood,
}: ModalEditProps) {
	const formRef = React.createRef<FormHandles>();

	const handleSubmit = async (data: FoodBase) => {
		await handleUpdateFood(data);
		setIsOpen();
	};

	return (
		<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
			<Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
				<h1>Editar Prato</h1>
				<Input name="image" placeholder="Cole o link aqui" />

				<Input name="name" placeholder="Ex: Moda Italiana" />
				<Input name="price" placeholder="Ex: 19.90" />

				<Input name="description" placeholder="Descrição" />

				<button type="submit" data-testid="edit-food-button">
					<div className="text">Editar Prato</div>
					<div className="icon">
						<FiCheckSquare size={24} />
					</div>
				</button>
			</Form>
		</Modal>
	);
}

