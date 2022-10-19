import { createAction } from "typesafe-actions";

export const storeData = createAction("STORE DATA", (payload)=> payload)();
