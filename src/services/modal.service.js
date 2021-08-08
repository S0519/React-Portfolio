import {Subject} from 'rxjs';

const setModalOpen = new Subject();

const ModalService = {
	setModal: (modalDetails) => setModalOpen.next({show: modalDetails.value, project: modalDetails.project}),
	getModal: () => setModalOpen.asObservable(),
}


export default ModalService;
