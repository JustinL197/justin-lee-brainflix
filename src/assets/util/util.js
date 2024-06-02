import { formatDistanceToNow } from 'date-fns';

export const getDynamicTime = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), {addSuffix: true});
}