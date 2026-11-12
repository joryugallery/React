
import React, { useState } from 'react';
import DistanceInput from './DistanceInput';

function toMile(km) {
    return km * 0.621371;
}

function toKm(mile) {
    return mile / 0.621371;
}

function DistanceConverter() {
    const [distance, setDistance] = useState('');
    const [unit, setUnit] = useState('km');

    const handleKmChange = (value) => {
        setDistance(value);
        setUnit('km');
    };

    const handleMileChange = (value) => {
        setDistance(value);
        setUnit('mile');
    };

    const convertedDistance = distance === '' || !Number.isFinite(Number(distance))
        ? ''
        : unit === 'km'
            ? toMile(Number(distance)).toFixed(3)
            : toKm(Number(distance)).toFixed(3);

    return (
        <div>
            <h1>Distance Converter</h1>
            <p>
                킬로미터와 마일을 간편하게 변환해 보세요.
            </p>

            <DistanceInput
                unit="km"
                distance={unit === 'km' ? distance : convertedDistance}
                onDistanceChange={handleKmChange}
            />

            <div>⇅</div>

            <DistanceInput
                unit="mile"
                distance={unit === 'mile' ? distance : convertedDistance}
                onDistanceChange={handleMileChange}
            />

            <div>
                <p>변환 결과</p>
                <h2>
                    {convertedDistance === ''
                        ? '숫자를 입력하세요'
                        : `${convertedDistance} ${unit === 'km' ? 'mile' : 'km'}`}
                </h2>
            </div>
        </div>
    );
}

export default DistanceConverter;
