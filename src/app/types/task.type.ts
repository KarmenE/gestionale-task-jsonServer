export type Task = {
    id: number,
    title: string,
    description: string,
    urgency: "bassa" | "media" | "alta"
}