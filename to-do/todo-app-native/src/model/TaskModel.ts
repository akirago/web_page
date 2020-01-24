export default interface Task {
    id: String
    title: string
    note?: string
    estimateEndDateTime?: Date
    completed: Boolean
}