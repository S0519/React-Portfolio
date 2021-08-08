import React from "react"
import ModalService from "../../services/modal.service";

const Project = (props) => {

	const triggerModal = () => {
		ModalService.setModal({value: true, project: props.project});
	}

	return (
		<div className="single-project" onClick={() => triggerModal()}>
			<div className="project-image"><img src={props.project.image} alt={props.project.description}/></div>
			<p>{props.project.description}</p>
		</div>
	)
}

export default Project;
