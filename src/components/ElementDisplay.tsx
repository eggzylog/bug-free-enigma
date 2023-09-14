const ElementDisplay: React.FC<ElementDisplay> = ({ title, info }) => {
  return (
    <p>
      {title}: <span className='font-bold'>{info !== null ? info : 'N/A'}</span>
    </p>
  );
};

export default ElementDisplay;
