import React from 'react';

let renderCount = 0;

 function IsFive({ value })  {
    console.log(`🔴 isFive render: ${++renderCount}`);

    const getResult = React.useMemo( () => {
        let i = 0;
        while (i < 900000000) i++;
        return value === 5 ? '✅ Это пять :D' : '❌ Это не пять :(';
    }, [value])

    return <h3>{getResult}</h3>;
}

export default React.memo(IsFive, (prevProps,nextProps)=>{
    if(nextProps.value === 5){
        return false
    }
    return true
})


