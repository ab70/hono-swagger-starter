import { Context } from "hono"
function testController() {
    return {
        // test
        async test(c: Context) {
            try {
                return c.json({ success: true })
            } catch (error: any) {
                return c.json({ success: false, message: error.message })
            }
        },
        async test1(c: Context) {
            try {
                return c.json({ success: true })
            } catch (error: any) {
                return c.json({ success: false, message: error.message })
            }
        },
        async test2(c: Context) {
            try {
                return c.json({ success: true })
            } catch (error: any) {
                return c.json({ success: false, message: error.message })
            }
        }
    }
}

export default testController;