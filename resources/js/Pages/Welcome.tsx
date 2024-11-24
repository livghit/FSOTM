import {Head} from '@inertiajs/react';
import {Button} from "@/Components/ui/button";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome"/>
            <Button>Hello</Button>
            <Button variant={'secondary'}>Hello</Button>
        </>
    );
}
