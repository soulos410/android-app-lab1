import * as Permissions from 'expo-permissions';

export default async function getPermissons() {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    if (status !== 'granted') {
        throw new Error('Location permission not granted');
    }
}
