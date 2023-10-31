type SystemTaskDto = {
    id: Number,
    name_en: String,
    status: String,
    controller: String,
    type: String,
    children: SystemTaskDto[];
}
export type {SystemTaskDto};