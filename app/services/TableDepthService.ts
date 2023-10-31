import { SystemTaskDto } from "../dto/System-task.dto";

const calculateDepth = (tasks: SystemTaskDto[], depth: number = 1): number => {
    let maxDepth = 0;
    for (const task of tasks) {
        if (task.type === 'MODULE') {
            maxDepth = Math.max(maxDepth, calculateDepth(task.children, depth + 1));
        }
    }
    return maxDepth;
}
const tableDepthService = {
    calculateDepth,
}

export default tableDepthService;
