import React, { useCallback, useState } from 'react';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import Button from '../../atoms/button';
import { AccordionItem } from './style';

const Accordion = ({title, list, dataIndex}) => {
  const [unfold, onUnfold] = useState(false);
  const setUnfold = useCallback(() => {
    onUnfold(prev => !prev);
  }, []);
  return (
    <div>
      <div>
        <Button type="link" onClick={setUnfold}>
          {title}
          {
            unfold ? <BiCaretUp /> : <BiCaretDown/>
          }
        </Button>
      </div>
      {
        unfold &&
        <div>
          {
            list.map((v) =>
              <AccordionItem>
                <Button type="link" size="small">{v[dataIndex]}</Button>
              </AccordionItem>
            )
          }
        </div>
      }
    </div>
  );
}

export default Accordion;