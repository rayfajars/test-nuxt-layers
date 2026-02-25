import { format } from "date-fns";
import { id } from "date-fns/locale";

export function formatDate(date: Date | string | number): string {
  return format(new Date(date), "dd MMM yyyy", { locale: id });
}

export function formatDateTime(date: Date | string | number): string {
  return format(new Date(date), "dd MMM yyyy, HH:mm", { locale: id });
}
