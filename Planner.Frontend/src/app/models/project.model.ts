import {ProjectState} from "./state.project.model";

export interface Project {
  id: number,
  name: string,
  notes?: string,
  duedate?: Date,
  state: ProjectState
}
