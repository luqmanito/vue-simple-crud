import moment from "moment-timezone";

export const getTimezone = () => {
  return "Asia/Jakarta";
};

export function simpleDate(date: string) {
  return date ? moment(date).format("DD/MM/YYYY") : "-";
}
export function simpleDateTime(date: string) {
  return date ? moment(date).format("DD/MM/YYYY hh:mm A") : "-";
}
export function simpleDateTimeTZ(date: string) {
  const timezone = getTimezone() || "Asia/Jakarta";
  return date
    ? moment.utc(date).tz(timezone).format("DD/MM/YYYY hh:mm A")
    : "-";
}
export function simpleDateTZ(date: string) {
  const timezone = getTimezone() || "Asia/Jakarta";
  return date ? moment.utc(date).tz(timezone).format("DD/MM/YYYY") : "-";
}
