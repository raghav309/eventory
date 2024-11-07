const User = require('../models/user.model')

const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        /* STEP1: validate inputs */
        if (!email || !password) throw Error('All fields are required')
        if (!validator.isEmail(email)) throw Error('Email is not valid')
        if (!validator.isStrongPassword(password)) throw Error('Passowrd is not strong')

        /* STEP2: check if email is present in DB */
        const emailExists = await User.findOne({ email })
        if (emailExists) throw Error('Email is already in use')

        /* STEP3: generate salt and hash password */
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        /* STEP4: save user in DB*/
        const savedUser = await User.create({ email, password: hashedPassword })

        /* STEP5: generate jwt */
        const token = jwt.sign({ _id: savedUser._id }, 'this-is-lame-secret', { expiresIn: '3d' })

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        /* STEP1: Validate inputs */
        if (!email || !password) throw Error('All fields are required')

        /* STEP2: Check for user existance in DB */
        const savedUser = await User.findOne({ email })
        if (!savedUser) throw Error('Incorrect email')

        /* STEP3: Verify password */
        const passwordMatched = await bcrypt.compare(password, savedUser.password)
        if (!passwordMatched) throw Error('Password incorrect')

        /* STEP4: Generate jwt */
        const token = jwt.sign({ _id: savedUser._id }, 'this-is-lame-secret', { expiresIn: '3d' })

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { loginUser, signupUser }
