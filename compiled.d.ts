import * as $protobuf from protobufjs;
import Long = require("long");
/** Namespace test. */
export namespace test {

    /** Namespace test. */
    namespace test {

        /** Namespace test. */
        namespace test {

            /** Properties of a testNumber. */
            interface ItestNumber {

                /** testNumber i */
                i?: (number|null);

                /** testNumber j */
                j?: (bigint|null);

                /** testNumber m1 */
                m1?: ({ [k: string]: number }|null);

                /** testNumber m2 */
                m2?: ({ [k: string]: bigint }|null);

                /** testNumber msI */
                msI?: (number|null);

                /** testNumber msJ */
                msJ?: (number|null);
            }

            /** Represents a testNumber. */
            class testNumber implements ItestNumber {

                /**
                 * Constructs a new testNumber.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: test.test.test.ItestNumber);

                /** testNumber i. */
                public i: number;

                /** testNumber j. */
                public j: bigint;

                /** testNumber m1. */
                public m1: { [k: string]: number };

                /** testNumber m2. */
                public m2: { [k: string]: bigint };

                /** testNumber msI. */
                public msI?: (number|null);

                /** testNumber msJ. */
                public msJ?: (number|null);

                /** testNumber MS. */
                public MS?: ("msI"|"msJ");

                /**
                 * Creates a new testNumber instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns testNumber instance
                 */
                public static create(properties?: test.test.test.ItestNumber): test.test.test.testNumber;

                /**
                 * Encodes the specified testNumber message. Does not implicitly {@link test.test.test.testNumber.verify|verify} messages.
                 * @param message testNumber message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: test.test.test.ItestNumber, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified testNumber message, length delimited. Does not implicitly {@link test.test.test.testNumber.verify|verify} messages.
                 * @param message testNumber message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: test.test.test.ItestNumber, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a testNumber message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns testNumber
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): test.test.test.testNumber;

                /**
                 * Decodes a testNumber message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns testNumber
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): test.test.test.testNumber;

                /**
                 * Verifies a testNumber message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a testNumber message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns testNumber
                 */
                public static fromObject(object: { [k: string]: any }): test.test.test.testNumber;

                /**
                 * Creates a plain object from a testNumber message. Also converts values to other types if specified.
                 * @param message testNumber
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: test.test.test.testNumber, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this testNumber to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for testNumber
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
