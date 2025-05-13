export interface Personnel {
  id?: string;
  name: string;
  role: string;
  contact: string;
  flight_number?: string; // si está asignado a un vuelo
}
