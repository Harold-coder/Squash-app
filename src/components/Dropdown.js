import * as React from 'react';
  
const Dropdown = () => {
    const [week, setWeek] = React.useState(1)
  
    const handleOpen = () => {
        let updated = (week + 1)%3
        if (updated === 0){
            updated = 1
        }
        setWeek(updated);
    };
  
    return (
      <div>
        <button onClick={handleOpen} className="dd-btn">{"Week " + week}</button>
      </div>
    );
  };
  

export default Dropdown;