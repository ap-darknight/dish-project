import { useEffect, useRef } from "react"

export const useDimensions = ref => {
    const dimensions = useRef({width: 0, height: 0});
    console.log(ref.current);

    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    }, []);

    return dimensions.current;
}

