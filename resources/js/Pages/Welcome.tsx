import {Head, useForm, usePage} from '@inertiajs/react';
import {Input} from "@/Components/ui/input";
import {Label} from "@/Components/ui/label";
import {Button} from "@/Components/ui/button";
import {FormEvent} from "react";
import InputError from "@/Components/InputError";
import {Alert, AlertDescription, AlertTitle} from "@/Components/ui/alert";
import {Terminal} from "lucide-react";

export default function Welcome() {

    const {data, setData, post, processing, errors} = useForm({
        content: "",
        ttl: "",
    })


    const {flash} = usePage().props;

    const createMessage = (e: FormEvent<Element>) => {
        e.preventDefault();

        post(route('message.create'));
    }
    return (
        <>
            <Head title="Welcome"/>
            <main className="max-w-4xl mx-auto sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="mt-10 w-full">
                    <form onSubmit={createMessage} className="flex flex-col gap-5">
                        <div>
                            <Label htmlFor="content">Content</Label>
                            <Input
                                name="content"
                                value={data.content}
                                onChange={(e) => {
                                    setData('content', e.target.value)
                                }}
                                placeholder="Content of the message"/>

                            <InputError message={errors.content} className="mt-2"/>
                        </div>

                        <Input
                            name="ttl"
                            value={data.ttl}
                            onChange={(e) => setData('ttl', e.target.value)}
                            placeholder="Time for the message to live"/>
                        <InputError message={errors.ttl} className="mt-2"/>

                        <Button type={"submit"}>Submit</Button>

                    </form>
                    <div className="absolute left-5 right-5 bottom-5">
                        {flash.success &&
                            <Alert>
                                <Terminal className="h-4 w-4"/>
                                <AlertTitle>All good !</AlertTitle>
                                <AlertDescription>
                                    {flash.success}
                                </AlertDescription>
                            </Alert>
                        }
                        {flash.error &&
                            <Alert>
                                <Terminal className="h-4 w-4"/>
                                <AlertTitle>Heads up!</AlertTitle>
                                <AlertDescription>
                                    {flash.error}
                                </AlertDescription>
                            </Alert>
                        }
                        {flash.url &&
                            <Alert>
                                <Terminal className="h-4 w-4"/>
                                <AlertTitle>Copy URL it wont generate again!</AlertTitle>
                                <AlertDescription>
                                    {flash.url}
                                </AlertDescription>
                            </Alert>
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
