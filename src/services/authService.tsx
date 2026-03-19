import supabase from "../lib/supabase";

export const signInWithEmail = async (email: string, pwd: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pwd,
    })
    
    if (error) {
        console.error('Error signing in:', error.message);
        return { success: false, error: error.message, data: null };
    }
    return { success: true, error: null, data };
};


export const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Error signing out:', error.message);
        return { success: false, error: error.message };
    }
    return { success: true, error: null };
};