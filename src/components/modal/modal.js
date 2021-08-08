import React, {useEffect, useState} from "react";
import {Button, Modal, Row, Col} from "react-bootstrap";
import ModalService from "../../services/modal.service";

const CustomModal = (props) => {
	const [open, setOpen] = useState(false);
	const [project, setProject] = useState({});

	useEffect(() => {
		//create a subscription to watch for food changes
		const subscription = ModalService.getModal().subscribe((showValue) => {
			setOpen(showValue.show);
			setProject(showValue.project);
		});

		return () => {
			//unsubscribe when leaving the page
			subscription.unsubscribe();
		}
	}, []);

	return (
		<Modal
			show={open}
			animation={true}
			dialogClassName="modal-90w"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			onHide={() => setOpen(false)}
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{project.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Row>
					<Col sm={5}>
						<img src={project.image} alt={project.name}/>
					</Col>
					<Col sm={7}>
						<div className="mb-2">
							<h5>Description:</h5>
							{project.description}
						</div>
						<div className="mb-2">
							<h5>URL:</h5>
							<a href={project.url} rel="noreferrer" target="_blank">{project.url}</a>
						</div>
						<div>
							<h5>Github:</h5>
							<a href={project.github} rel="noreferrer" target="_blank">{project.github}</a>
						</div>
					</Col>
				</Row>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => setOpen(false)}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CustomModal;
