import { create } from "zustand";

const initialState = {
	userId: "",
	adminAccess: false,
	company: "",
	repFirstName: "",
	repLastName: "",
	repEmail: "",
	repPhone: "",
};

export const useClientStore = create((set, get) => ({
	...initialState,
	actions: {
		getClientStore: () => {
			const state = get();
			return {
				userId: state.userId,
				adminAccess: state.adminAccess,
				company: state.company,
				repFirstName: state.repFirstName,
				repLastName: state.repLastName,
				repEmail: state.repEmail,
				repPhone: state.repPhone,
			};
		},
		resetForm: () => {
			set({ ...initialState });
		},
		setUserId: (str) => {
			set({ userId: str });
		},
		setAdminAccess: (bool) => {
			set({ adminAccess: bool });
		},
		setCompany: (str) => {
			set({ company: str });
		},
		setRepFirstName: (str) => {
			set({ repFirstName: str });
		},
		setRepLastName: (str) => {
			set({ repLastName: str });
		},
		setRepEmail: (str) => {
			set({ repEmail: str });
		},
		setRepPhone: (str) => {
			set({ repPhone: str });
		},
	},
}));

export const useClientStoreActions = () => useClientStore((state) => state.actions);
