/// <reference types="react" />
import * as icons from 'react-feather';
type IconName = keyof typeof icons;
type IconProps = {
    name: IconName;
};
export declare function Feather({ name, ...rest }: IconProps): JSX.Element;
export {};
//# sourceMappingURL=Feather.d.ts.map