import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const SelectionLogic = ({ label }) => {
    const [showSelections, setShowSelections] = useState(false);
    const [selectedValues, setSelectedValues] = useState(['All']);

    const handleSelection = () => {
        setShowSelections(prevState => !prevState);
    };

    const handleCheckboxChange = (value) => {
        setSelectedValues(prevValues =>
            prevValues.includes(value)
                ? prevValues.filter(v => v !== value)
                : [...prevValues, value]
        );
    };

    return (
        <div className='pattern'>
            <label onClick={handleSelection} style={{ cursor: 'pointer' }}>
                {label} {showSelections ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </label>
            <div className="selected-values">
                {selectedValues.length > 0 ? selectedValues.join(', ') : 'None'}
            </div>
            {showSelections && (
                <div className='selections'>
                    <div onClick={() => setSelectedValues(['All'])}>
                        All
                    </div>
                    <div onClick={() => setSelectedValues([])}>
                        Unselect all
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            checked={selectedValues.includes('Men')}
                            onChange={() => handleCheckboxChange('Men')}
                        />
                        Men
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            checked={selectedValues.includes('Women')}
                            onChange={() => handleCheckboxChange('Women')}
                        />
                        Women
                    </div>
                    <div>
                        <input
                            type='checkbox'
                            checked={selectedValues.includes('Baby & Kids')}
                            onChange={() => handleCheckboxChange('Baby & Kids')}
                        />
                        Baby & Kids
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectionLogic;
